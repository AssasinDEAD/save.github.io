

$(".save__btn").on("click", function () {
   localStorage.setItem("see", "Нет, Я не останусь на второй год, Я буду программистом!")
   $(".save__title").css("color", "green").text("Нет, Я не останусь на второй год, Я буду программистом!")
   $(".save__btn").css("background-color", "green").text("ДА")
})

if (localStorage.see == "Нет, Я не останусь на второй год, Я буду программистом!") {
   $(".save__title").text(localStorage.see).css("color", "green")
   $(".save__btn").css("background-color", "green").text("ДА")
} else {
   $(".save__title")
   $(".save__btn")
}
