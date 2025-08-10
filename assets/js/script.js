//header notif
var shopnotif = document.querySelector(".shopp-notif")
var notifbox = document.querySelector(".notif-box")
shopnotif.addEventListener('click',function(){
  notifbox.classList.toggle("active")
})

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel.section1").owlCarousel({
  rtl: true,
  loop: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 3,
    },
    320: {
      items: 4,
    },
    550: {
      items: 6,
    },
    700: {
      items: 8,
    },
    850: {
      items: 10,
    },
    1000: {
      items: 12,
    },
  },
});
// section2
$(".owl-carousel.section2").owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
  },
});
// section3
$(".owl-carousel.section3").owlCarousel({
  rtl: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 3,
    },
    400: {
      items: 4,
    },
    800: {
      items: 6,
    },
    1000: {
      items: 8,
    },
  },
});
// section4

$(".owl-carousel.section4").owlCarousel({
  rtl: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    690: {
      items: 3,
    },
    760: {
      items: 3,
    },
    830: {
      items: 5,
    },
    1150: {
      items: 7,
    },
  },
});
// section6
$(".owl-carousel.section6").owlCarousel({
  rtl: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    480: {
      items: 3,
    },
    760: {
      items: 4,
    },
    830: {
      items: 5,
    },
    1150: {
      items: 7,
    },
  },
});
//section7
$(".section7").owlCarousel({
  rtl: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 3,
    },
    600: {
      items: 4,
    },
    800: {
      items: 6,
    },
    1000: {
      items: 8,
    },
  },
});

// product page---------------------------------------------//
// IMG SELECT
$(".owl-theme").owlCarousel({
  rtl: true,
  margin: 30,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 3,
    },
    500: {
      items: 4,
    },
    1000: {
      items: 4,
    },
  },
});
$(document).ready(function () {
  const mainImage = $("#mainImage");
  const carousel = $("#thumbCarousel");
  // تغییر عکس بزرگ با کلیک روی عکس کوچک
  carousel.on("click", ".item", function () {
    const largeSrc = $(this).data("large");
    mainImage.attr("src", largeSrc);

    // مدیریت کلاس فعال
    carousel.find(".item").removeClass("active-thumb");
    $(this).addClass("active-thumb");
  });
});

//color selector product page
document.addEventListener("DOMContentLoaded", function () {
  // انتخاب تمام دکمه های رنگ و سایز
  const colorButtons = document.querySelectorAll(".btn-color-selector");
  const sizeButtons = document.querySelectorAll(".btn-size-selector");

  // مدیریت انتخاب رنگ
  colorButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // حذف انتخاب از تمام دکمه های رنگ
      colorButtons.forEach((btn) => {
        btn.removeAttribute("data-selected");
        btn.blur();
      });

      // انتخاب دکمه فعلی
      this.setAttribute("data-selected", "true");
      this.focus();
    });
  });

  // مدیریت انتخاب سایز
  sizeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // حذف انتخاب از تمام دکمه های سایز
      sizeButtons.forEach((btn) => {
        btn.removeAttribute("data-selected");
        btn.blur();
      });

      // انتخاب دکمه فعلی
      this.setAttribute("data-selected", "true");
      this.focus();
    });
  });

  // امکان انتخاب همزمان رنگ و سایز (اما نه دو رنگ یا دو سایز)
});
//product imformation

const fullText = `لپ‌تاپ اینتل NUC X15 Arc، با طراحی جذاب و کیفیت ساخت بالا، ترکیبی از عملکرد قدرتمند و قابلیت حمل را در یک بدنه‌ سبک و مقاوم ارائه می‌دهد. این دستگاه که بدنه آن از جنس آلومینیوم باکیفیت و بخشی از پلاستیک ساخته شده، وزنی حدود دو کیلوگرم و ضخامتی نزدیک به ۲۲ میلی‌متر دارد. چنین ابعادی، آن را در میان لپ‌تاپ‌های گیمینگ، به محصولی قابل حمل تبدیل کرده است. پردازنده اینتل Core i7-12700H با ۱۴ هسته (شامل شش هسته Performance و هشت هسته Efficient) و ۲۰ رشته پردازشی، قدرت پردازشی بالایی را فراهم می‌کند. در کنار این تراشه، پردازنده گرافیکی اینتل Arc A730M با ۱۲ گیگابایت حافظه GDDR6 برای اجرای بازی‌های روز و برنامه‌های گرافیکی نیمه‌سنگین، انتخابی مناسب محسوب می‌شود. نمایشگر ۱۵.۶ اینچی IPS با وضوح Full HD و نرخ نوسازی ۱۴۴ هرتز، تصاویر را با رنگ‌های غنی و نرخ پاسخگویی مناسب نمایش می‌دهد. صفحه‌کلید با نورپردازی RGB و تاچ‌پد روان، کار با دستگاه را دلپذیرتر می‌کنند. اسپیکرهای استریو، وب‌کم HD 720p و پشتیبانی از Windows Hello نیز تجربه‌ی چندرسانه‌ای و ارتباطات تصویری را بهبود می‌بخشند. اتصالات گسترده، شامل سه پورت USB-A 3.2، یک USB-C (Thunderbolt 4)، HDMI و جک صدا، به همراه Wi-Fi 6 و بلوتوث، اتصال آسان به دستگاه‌ها و شبکه را میسر می‌سازند. در مجموع، لپ‌تاپ اینتل NUC X15 Arc، دستگاهی خوش‌ساخت، قدرتمند و انعطاف‌پذیر است که گیمرها و کاربران حرفه‌ای می‌توانند روی عملکرد و دوام آن حساب کنند.`;

const textElement = document.getElementById("product-text");
const btn = document.getElementById("toggle-btn");

const words = fullText.split(" ");
const shortText = words.slice(0, 50).join(" ") + "...";

let isExpanded = false;

textElement.textContent = shortText;

btn.addEventListener("click", () => {
  if (!isExpanded) {
    textElement.textContent = fullText;
    btn.textContent = "نمایش کمتر";
  } else {
    textElement.textContent = shortText;
    btn.textContent = "نمایش بیشتر";
  }
  isExpanded = !isExpanded;
});
//product imformation

const allText = `لپ‌تاپ اینتل NUC X15 Arc، با طراحی جذاب و کیفیت ساخت بالا، ترکیبی از عملکرد قدرتمند و قابلیت حمل را در یک بدنه‌ سبک و مقاوم ارائه می‌دهد. این دستگاه که بدنه آن از جنس آلومینیوم باکیفیت و بخشی از پلاستیک ساخته شده، وزنی حدود دو کیلوگرم و ضخامتی نزدیک به ۲۲ میلی‌متر دارد. چنین ابعادی، آن را در میان لپ‌تاپ‌های گیمینگ، به محصولی قابل حمل تبدیل کرده است. پردازنده اینتل Core i7-12700H با ۱۴ هسته (شامل شش هسته Performance و هشت هسته Efficient) و ۲۰ رشته پردازشی، قدرت پردازشی بالایی را فراهم می‌کند. در کنار این تراشه، پردازنده گرافیکی اینتل Arc A730M با ۱۲ گیگابایت حافظه GDDR6 برای اجرای بازی‌های روز و برنامه‌های گرافیکی نیمه‌سنگین، انتخابی مناسب محسوب می‌شود. نمایشگر ۱۵.۶ اینچی IPS با وضوح Full HD و نرخ نوسازی ۱۴۴ هرتز، تصاویر را با رنگ‌های غنی و نرخ پاسخگویی مناسب نمایش می‌دهد. صفحه‌کلید با نورپردازی RGB و تاچ‌پد روان، کار با دستگاه را دلپذیرتر می‌کنند. اسپیکرهای استریو، وب‌کم HD 720p و پشتیبانی از Windows Hello نیز تجربه‌ی چندرسانه‌ای و ارتباطات تصویری را بهبود می‌بخشند. اتصالات گسترده، شامل سه پورت USB-A 3.2، یک USB-C (Thunderbolt 4)، HDMI و جک صدا، به همراه Wi-Fi 6 و بلوتوث، اتصال آسان به دستگاه‌ها و شبکه را میسر می‌سازند. در مجموع، لپ‌تاپ اینتل NUC X15 Arc، دستگاهی خوش‌ساخت، قدرتمند و انعطاف‌پذیر است که گیمرها و کاربران حرفه‌ای می‌توانند روی عملکرد و دوام آن حساب کنند.`;

const textElements = document.getElementById("product-review");
const btnText = document.getElementById("toggle-btn-review");

const word = allText.split(" ");
const shortTexts = word.slice(0, 50).join(" ") + "...";

let isExpand = false;

textElements.textContent = shortTexts;

btnText.addEventListener("click", () => {
  if (!isExpand) {
    textElements.textContent = allText;
    btnText.textContent = "نمایش کمتر";
  } else {
    textElements.textContent = shortText;
    btnText.textContent = "نمایش بیشتر";
  }
  isExpand = !isExpand;
});

//product comment

$(".product-comment").owlCarousel({
  rtl: true,
  margin: 30,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
//similar product
$(".similar-product").owlCarousel({
  rtl: true,
  margin: 20,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    480: {
      items: 3,
    },
    820: {
      items: 4,
    },
    1050: {
      items: 5,
    },
    1250: {
      items: 6,
    },
  },
});

