import OrderSummary from "../common/OrderSummary";
import React, { Suspense } from "react";
const orderSummaryList = [
{
// ordersHeading: "ORDERS",
// orderCount: "08",
// orderStatus: "03 on Process",
exploreMoreText: "Explore More...",
totalOrdersText: "Total Number of Orders: ",
},
{
// ordersHeading: "ORDERS",
// orderCount: "08",
// orderStatus: "03 on Process",
exploreMoreText: "Explore More...",
totalOrdersText: "Total Number of Orders: ",
},
{
// ordersHeading: "ORDERS",
// orderCount: "08",
// orderStatus: "03 on Process",
exploreMoreText: "Explore More...",
totalOrdersText: "Total Number of Orders: ",
},
];
export default function OrderSummarySection() {
    return (
      <>
        {/* order summary section */}
        <div className="flex gap-[21px] md:flex-col text-adsy_com-black">
          <Suspense fallback={<div>Loading feed...</div>}>
            {orderSummaryList.map((d, index) => (
              <OrderSummary {...d} key={"orderSummary" + index} />
            ))}
          </Suspense>
        </div>
      </>
    );
  }
  
  