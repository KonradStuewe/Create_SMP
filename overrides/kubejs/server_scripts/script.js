// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Removing Stuff you love to spite you <3')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({output: 'immersiveengineering:crate'})
	event.shapeless('pamhc2foodextended:rawtofaconitem', ['pamhc2foodcore:cuttingboarditem', 'pamhc2foodextended:firmtofuitem', 'pamhc2foodcore:cookingoilitem', 'pamhc2foodcore:saltitem', 'pamhc2foodcore:flouritem', 'minecraft:sugar'])
	event.remove({output: 'naturescompass:naturescompass'})
	event.shaped('naturescompass:naturescompass', [
	'SLS',
    'CEC',
    'SLS'
	], {
    S: '#minecraft:saplings',
    L: '#minecraft:logs',
	C: 'minecraft:compass',
	E: 'minecraft:end_crystal' 
  })
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})