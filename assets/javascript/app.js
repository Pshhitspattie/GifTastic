var topics = [
    "Shameless",
    "The Office",
    "The Good Place",
    "Broad City",
    "The Handmaid's Tale",
    "Parks and Recreation",
    "Gossip Girl",
    "Stranger Things"
];

for(var i = 0; i < topics.length; i++) {
	var button = $("<button>").text(topics[i]);
	button.attr("data-tv", topics[i]);
	button.addClass("tv-button");
	$("#button-group").append(button);
}

