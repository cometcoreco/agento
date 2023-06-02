import React from "react";
import { useTranslation } from "next-i18next";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import Dialog from "./Dialog";

export default function PaymentModal({ show, close }: { show: boolean; close: () => void }) {
 const PaymentHandler =async()=>{
    const response = await fetch('http://localhost:3000/api/payment',{
        method:'POST'
    })
    const data =await response.json()
    console.log(data)
    window.location.href = data.url;
 }   
const [t] = useTranslation();
  return (
    <>
     <>
     <div className="flex">
      <Dialog header={`${t("Pro", { ns: "help" })} 🤖`} isShown={show} close={close}>
        <h4>$40</h4>
        <button onClick={PaymentHandler}>Subscribe</button>
      </Dialog>
      <Dialog header={`${t("Pro", { ns: "help" })} 🤖`} isShown={show} close={close}>
        <h4>$40</h4>
        <button onClick={PaymentHandler}>Subscribe</button>
      </Dialog>
    </div>
    </>
    </>
  );
}
