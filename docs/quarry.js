const modalSample = `end point sample url - <small>https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/***.png</small>`

const preFormattedModal = JSON.stringify(
  { id: '1', name: 'bulbasaur', url: '…kemon/1/' },
  null,
  2
)

const modalStore = `On Fetch redux store -collection is updated with data
sample data structure - <pre>${preFormattedModal}</pre>`

const treeDataSource = {
  name: 'Pokedox webapp',
  children: [
    {
      name: 'PokeAPI',
      children: [
        {
          name: 'sprites'
        }
      ]
    }
  ]
}

function start() {
  topping.launch('https://gouthamt.github.io/pokedex/', function() {
    topping
      .addScenario('fill form')
      .addStep('fill search string with raichu')
      .fillInputByTagName('input', 0, 'raichu', 100)
      .wait(1)
      .addStep('fill search string with chikorita')
      .fillInputByTagName('input', 0, 'chikorita', 100)
      .wait(0.5)
      .addStep('fill search string with <b>ninetales</b>')
      .fillInputByTagName('input', 0, 'ninetales', 100)
      .wait(0.5)
      .focusElementByTagName('button', 0)
      .createToolTipByTagName(
        'button',
        0,
        `This Pokemon image was fetched from Pokemon Api`,
        `right`
      )
      .wait(2.5)
      .clearToolTips()
      .popUpModal('sample api request end point', modalSample)
      .wait(2.5)
      .addStep('open modal')
      .popUpModal('sample api request model', modalStore)
      .wait(2.5)
      .addStep('open tree modal')
      .popUpTreeModal(
        `what's Happening ?`,
        `Sample end to end flow`,
        treeDataSource
      )
      .wait(2.5)
      .flushModal()
      .addStep(`Note: please <b>exclude</b> topping in production build.`)
      .finish()
      .play()
  })
}
