import PaymentSummary from "../common/PaymentSummary";
import React, { Suspense } from "react";
const orderSummaryList = [
{
// ordersHeading: "ORDERS",
// orderCount: "08",
// orderStatus: "03 on Process",
exploreMoreText: "Explore More...",
totalOrdersText: "Main balance: Funds you have added through available payment methods ",
},
{
// ordersHeading: "ORDERS",
// orderCount: "08",
// orderStatus: "03 on Process",
exploreMoreText: "Explore More...",
totalOrdersText: "Reserved balance: Funds that have been reserved as a task payment ",
},
{
// ordersHeading: "ORDERS",
// orderCount: "08",
// orderStatus: "03 on Process",
exploreMoreText: "Explore More...",
totalOrdersText: "Bonus balance: Extra funds that may be added for special activities Transaction type",

},
];
export default function OrderSummarySection() {
    return (
      <>
        {/* order summary section */}
        <div className="flex gap-[21px] md:flex-col text-adsy_com-black">
          <Suspense fallback={<div>Loading feed...</div>}>
            {orderSummaryList.map((d, index) => (
              <PaymentSummary {...d} key={"orderSummary" + index} />
            ))}
          </Suspense>
        </div>
      </>
    );
  }
  
  