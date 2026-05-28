import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import OpenAccount from "../OpenAccount";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite.zerodha.com"
        learnMore="https://zerodha.com/kite/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id1449453802"
      />
      <RightSection
        imageURL="/media/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://console.zerodha.com"
      />
      <LeftSection
        imageURL="/media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://coin.zerodha.com"
        learnMore="https://zerodha.com/coin/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/coin-by-zerodha/id1385909910"
      />
      <RightSection
        imageURL="/media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="https://kite.trade"
      />
      <LeftSection
        imageURL="/media/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        learnMore="https://zerodha.com/varsity/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1349197582"
      />
      <p className="text-center mt-5 mb-5">
        Want to know more? Check out the{" "}
        <a href="https://zerodha.tech" target="_blank" rel="noreferrer">Zerodha.tech</a> blog.
      </p>
      <Universe />
      <OpenAccount />
    </>
  );
}

export default ProductsPage;
