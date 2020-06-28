let blogPosts = [{
    Date: "June 6, 1944",
    Text: "You are about to embark upon the Great Crusade, toward which we have striven these many months. The eyes of the world are upon you. The hopes and prayers of liberty-loving people everywhere march with you. In company with our brave Allies and brothers-in-arms on other Fronts, you will bring about the destruction of the German war machine, the elimination of Nazi tyranny over the oppressed peoples of Europe, and security for ourselves in a free world. Your task will not be an easy one. Your enemy is well trained, well equipped and battle hardened. He will fight savagely. But this is the year 1944! Much has happened since the Nazi triumphs of 1940-41. The United Nations have inflicted upon the Germans great defeats, in open battle, man-to-man. Our air offensive has seriously reduced their strength in the air and their capacity to wage war on the ground. Our Home Fronts have given us an overwhelming superiority in weapons and munitions of war, and placed at our disposal great reserves of trained fighting men. The tide has turned! The free men of the world are marching together to Victory! I have full confidence in your courage and devotion to duty and skill in battle. We will accept nothing less than full Victory! Good luck! And let us beseech the blessing of Almighty God upon this great and noble undertaking."
}, {
    Date: "December 7, 1941",
    Text: "YESTERDAY, December 7, 1941 a date which will live in infamy the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan.The United States was at peace with that Nation and, at the solicitation of Japan, was still in conversation with its Government and its Emperor looking toward the maintenance of peace in the Pacific. Indeed, one hour after Japanese air squadrons had commenced bombing in the American Island of Oahu, the Japanese Ambassador to the United States and his colleague delivered to our Secretary of State a formal reply to a recent American message. And while this reply stated that it seemed useless to continue the existing diplomatic negotiations, it contained no threat or hint of war or of armed attack.It will be recorded that the distance of Hawaii from Japan makes it obvious that the attack was deliberately planned many days or even weeks ago. During the intervening time the Japanese Government has deliberately sought to deceive the United States by false statements and expressions of hope for continued peace.The attack yesterday on the Hawaiian Islands has caused severe damage to American naval and military forces. I regret to tell you that very many American lives have been lost. In addition American ships have been reported torpedoed on the high seas between San Francisco and Honolulu."
}]

function blogDrop() {
    for (let i = 0; i < blogPosts.length; i++) {
        let a = $("<a>")
        a.text(`${blogPosts[i].Date}`)
        a.addClass("dropdown-item blogPost dropItem")
        a.attr("href", "./blog.html")
        a.attr("data-date", `${blogPosts[i].Date}`)
        a.attr("data-text", `${blogPosts[i].Text}`)
        $(".blog").append(a)
}
}

function blogList() {
    for (let j = 0; j < blogPosts.length; j++) {
        let b = $("<a>")
        b.html(`<h4 class='unders myFont'>${blogPosts[j].Date}</h4>`)
        b.addClass("blogPost")
        b.attr("data-date", `${blogPosts[j].Date}`)
        b.attr("data-text", `${blogPosts[j].Text}`)
        $(".column-left").append(b);
    }
}

function renderText(scope) {
    $(".blogs").empty();
     let blogText = $(scope).attr("data-text");
     localStorage.setItem("text", blogText);
     console.log(blogText)
     $(".blogs").text(blogText);
 }

blogDrop();
blogList();
$(document).on("click", ".blogPost", function(){
    let scope = this
    localStorage.clear();
    renderText(scope);
 
}); 