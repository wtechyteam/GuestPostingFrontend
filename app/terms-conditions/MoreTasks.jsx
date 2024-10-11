import React from "react";
import { Heading } from "../common/Heading";
import Link from "next/link";

export default function MoreTasks() {
  return (
    <div className="cursor-pointer flex items-center justify-center rounded-lg bg-alice_blue px-3.5 shadow-bs1 mb-6">
      <div className="w-full flex justify-between rounded-lg items-center bg-more_tasks_green">
        <div className="flex flex-1 items-start gap-[22px]">
          <div className="flex items-center gap-[18px] self-center">
            <div className="h-[66px] w-[2px] bg-white-a700" />
          </div>
          <Heading
            size="heading2xl"
            as="h1"
            className="mt-[18px] text-white text-[24px] font-semibold"
          >
            Want to monetize your site while placing or creating unique and
            relevant content?
          </Heading>
        </div>
        <div className="flex-shrink-0 mr-[18px] rounded-lg">
          <Link href="/terms-conditions">
            <button
              style={{ backgroundColor: "#000000" }}
              className="text-white py-3 px-3 rounded hover:bg-green-700 transition-colors"
            >
              Add or Update Websites
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
