import React from "react";

export default function ProductItem({ viewDetails }) {
  return (
    <div className="flex justify-center">
      <div className="m-4">
        <h2>Shoes</h2>
        <img src={viewDetails.image} alt="" />
      </div>
      <div id="default-modal">
        <div class="mt-4 relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Alias
                </th>
                <th scope="col" class="px-6 py-3">
                  Description
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {viewDetails.name}
                </th>
                <td class="px-6 py-4">{viewDetails.alias}</td>
                <td class="px-6 py-4">{viewDetails.shortDescription}</td>
                <td class="px-6 py-4">{viewDetails.price} $</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
