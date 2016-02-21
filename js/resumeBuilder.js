HTMLheaderNameReplaced = HTMLheaderName.replace("%data%", "Jorge Abreu");
HTMLheaderRoleReplaced = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").append(HTMLheaderNameReplaced);
$("#header").append(HTMLheaderRoleReplaced);

var bio = {
	name: "Jorge Abreu",
	role: "Web Developer",
	contactInfo: {
		cellPhone: 888999444,
		address: "Rua das Cenas",
	},
	pict: "",
	welcomeMsg:"Ola cenas cenas adeus",
	skills: ["code", "speak", "walk", "eat"]
};

$("#header").append(bio.name);
$("#header").append(bio.role);
$("#header").append(bio.contactInfo.cellPhone);
$("#header").append(bio.contactInfo.address);

bio["car"] = "Ford";
$("#header").append(bio.car);