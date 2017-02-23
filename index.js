$(document).ready(function(){
    setBindings();
});
function setBindings(){
    $("nava").click(function(e){
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";
        $("html logo").animate({
            scrollTop: $("#" +sectionID).offset().top}, 1000)
    })

}