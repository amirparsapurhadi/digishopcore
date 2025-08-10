document.addEventListener("DOMContentLoaded", function () {
  const productTimerContainer = document.querySelector(".product-page-timer");

  // دریافت مقادیر از data attributes با پیشوند product
  const productHoursInit =
    parseInt(
      productTimerContainer
        .querySelector(".product-page-hours")
        .getAttribute("data-hours")
    ) || 0;
  const productMinutesInit =
    parseInt(
      productTimerContainer
        .querySelector(".product-page-minutes")
        .getAttribute("data-minutes")
    ) || 0;
  const productSecondsInit =
    parseInt(
      productTimerContainer
        .querySelector(".product-page-seconds")
        .getAttribute("data-seconds")
    ) || 0;

  // عناصر تایمر با پیشوند product
  const productHoursElement = productTimerContainer.querySelector(
    ".product-page-hours"
  );
  const productMinutesElement = productTimerContainer.querySelector(
    ".product-page-minutes"
  );
  const productSecondsElement = productTimerContainer.querySelector(
    ".product-page-seconds"
  );

  // متغیرهای زمان با پیشوند product
  let productTotalSeconds =
    productHoursInit * 3600 + productMinutesInit * 60 + productSecondsInit;

  // تابع به روز رسانی تایمر
  function updateProductTimer() {
    if (productTotalSeconds <= 0) {
      clearInterval(productTimerInterval);
      productTimerContainer.innerHTML =
        '<span class="timer-ended">زمان به پایان رسید!</span>';
      return;
    }

    productTotalSeconds--;

    // محاسبه زمان باقیمانده
    const productRemainingHours = Math.floor(productTotalSeconds / 3600);
    const productRemainingMinutes = Math.floor(
      (productTotalSeconds % 3600) / 60
    );
    const productRemainingSeconds = productTotalSeconds % 60;

    // نمایش مقادیر
    productHoursElement.textContent = productRemainingHours
      .toString()
      .padStart(2, "0");
    productMinutesElement.textContent = productRemainingMinutes
      .toString()
      .padStart(2, "0");
    productSecondsElement.textContent = productRemainingSeconds
      .toString()
      .padStart(2, "0");
  }

  // به روز رسانی اولیه
  updateProductTimer();

  // تنظیم اینتروال با نام منحصر به فرد
  const productTimerInterval = setInterval(updateProductTimer, 1000);
});
