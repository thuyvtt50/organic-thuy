// JavaScript Document
$(document).ready(function(){
		$(".btn-toggle").click(function(){
			$("#menu").slideToggle()
		})
		
		$("#dropdown-btn").click(function(){
			$("#dropdown-menu").slideToggle()
		})
		
})


$('#banner').owlCarousel({
   	 loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	//	autoplay:true,	 cho phép tự động chạy
    //	autoplayTimeout:5000,   thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
	  })


