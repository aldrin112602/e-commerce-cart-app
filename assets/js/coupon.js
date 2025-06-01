import { selector } from "./selector.js";

export function applyCoupon(price, quantity) {
  const total = price * quantity;

  const coupons = [
    {
      name: "SAVE10",
      minAmount: 100,
      discountPercent: 10,
      maxDiscount: 50,
    }
  ];

  const code = selector("#coupon-code")?.value.trim().toUpperCase();
  if (!code) return total;
  const coupon = coupons.find((c) => c.name === code);

  if (!coupon) {
    Swal.fire({
      title: "Invalid Coupon Code",
      text: `"${code}" is not a valid coupon.`,
      icon: "error",
    });
    return total;
  }

  if (total < coupon.minAmount) {
    Swal.fire({
      title: "Not Eligible",
      text: `You need to spend at least $${coupon.minAmount} to use "${coupon.name}".`,
      icon: "info",
    });
    return total;
  }

  const discount = Math.min((total * coupon.discountPercent) / 100, coupon.maxDiscount);
  const discountedTotal = total - discount;

  Swal.fire({
    title: "Coupon Applied!",
    text: `You saved $${discount.toFixed(2)} with "${coupon.name}"!`,
    icon: "success",
  });

  return discountedTotal;
}
