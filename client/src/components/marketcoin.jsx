import React, { useEffect, useState } from "react";
import axios from "axios";

const Prices = () => {
  const [prices, setPrices] = useState(null);

  useEffect(
    () => {
      const options = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          tiers: "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "50",
          offset: "0",
        },
        headers: {
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "dde534d84amsh6a5cc8cb6793a7ap18b73bjsnedde37c30793",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          //console.log("anup", response.data);
          setPrices(response?.data);
          //console.log("anup", prices?.status);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    [prices],
    []
  );

  //-------------------------------------

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient text-center">
        Current
        <br />
        Currency Prices
      </h1>
      <div className="flex flex-col md:p-12 py-12 px-4 md:w-10/12">
        <table className="styled-table px-2">
          <tr className=" text-center">
            <th className="text-white font-bold text-lg py-2">Currency Rank</th>
            <th className="text-white font-bold text-lg py-2 ">
              Currency Name
            </th>
            <th className="text-white font-bold text-lg py-2">
              Currency Symbol
            </th>
            <th className="text-white font-bold text-lg py-2">Market Price</th>
            <th className="text-white font-bold text-lg py-2">Market Cap</th>
            <th className="text-white font-bold text-lg py-2">Change</th>
          </tr>
          {prices?.data.coins.slice(0, 10).map((coin) => {
            return (
              <tr className="text-center ">
                <td className="text-white flex flex-row items-center gap-10">
                  <img
                    src={coin.iconUrl}
                    alt="BigCo Inc. logo"
                    width="35"
                    height="35"
                    className="m-2.5"
                  />
                  {coin.rank}
                </td>

                <td className="text-white">{coin.name}</td>
                <td className="text-white m-2">{coin.symbol}</td>
                <td className="text-white">$ {coin.price}</td>
                <td className="text-white">$ {coin.marketCap}</td>
                <td className="text-white">$ {coin.change}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Prices;
