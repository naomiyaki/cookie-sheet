if(app.documents.length != 0){
	// Store current document and measurements in a variable
	var doc = app.activeDocument;
	var docWidth = doc.width;
	var docHeight = doc.height;

	// Store the address of the last (first) layer in the array
	var totalLayers = parseInt(doc.artLayers.length);
	var lastLayer = totalLayers - 1;

	// Secondary iterator to translate layers in layer order
	var p = 0;

	// Resize the canvas to original width * total layers
	doc.resizeCanvas(doc.width * totalLayers, docHeight, AnchorPosition.TOPLEFT);

	// Iterate through layers in reverse (layers array goes from bottom to top)
	for(i = lastLayer; i >= 0; --i) {
		var layer = doc.artLayers[i];
		// Translate the layer by it's width * it's reverse layer-order
		layer.translate(p * docWidth, 0);
		p++;
	}
}