import type { BotuiInterface } from "botui"

export const deliveryBot = (botui: BotuiInterface) => {
  let address = "House 1, First Ave."
  const end = function () {
    botui.wait({ waitTime: 1000 }).then(() =>
      botui.message.add({
        text: "Thank you. Your package will shipped soon.",
      })
    )
  }
  const askAddress = function () {
    botui.message
      .add({
        text: "Please write your address below:",
      })
      .then(function () {
        return botui.action.set(
          {
            size: 30,
            defaultValue: address, // show the saved address if any
            placeholder: "Address",
          },
          { actionType: "input" }
        )
      })
      .then(function (res) {
        botui.message.add({
          text: "New address: " + res.value,
        })

        address = res.value // save address

        return botui.action.set(
          {
            options: [
              {
                label: "Confirm",
                value: "confirm",
              },
              {
                label: "Edit",
                value: "edit",
              },
            ],
          },
          { actionType: "selectButtons" }
        )
      })
      .then(function (res) {
        if (res.selected.value == "confirm") {
          end()
        } else {
          askAddress()
        }
      })
  }

  botui
    .wait({ waitTime: 1000 })
    .then(() =>
      botui.message.add({
        text: "Where would you like the package to be delivered?",
      })
    )
    .then(() => {
      return botui.action.set(
        {
          options: [
            {
              value: "existing",
              label: "Existing Address",
            },
            {
              value: "new",
              label: "Add New Address",
            },
          ],
        },
        { actionType: "selectButtons" }
      )
    })
    .then(function (res) {
      if (res.selected.value == "existing") {
        botui.message.add({ text: address }, { human: true })
        end()
      } else {
        askAddress()
      }
    })
}
