import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  Button,
  Radio,
  RadioGroup
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
const[currency , setCurrency] =useState('inr')


const ChangePage =(page)=>{
  setPage(page)
  setLoading(true)
}

const btns = new Array(132).fill(1)



const currencySymbol = currency ==='inr' ? "₹" : currency ==='eur' ? '€' : '$'

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
        
        
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    
    fetchCoins();
  }, [currency ,page]);

  if (error) {
    return <Error message={"Error While fetching Coins"} />;
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>

        <RadioGroup  onChange={setCurrency} p={'7'}> 
          <HStack spacing={'4'}>
           <Radio value={"inr"}>INR
           </Radio>
           <Radio value={"eur"}>EUR
           </Radio>
           <Radio value={"usd"}>USD

           </Radio>

          </HStack>
        </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
              id={i.id}
                key={i.id}
                name={i.name}
                img={i.image}
                price={i.current_price}
                symbol={i.symbol}
                url={i.url}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack w={'full'} overflowX={'auto'} p={'8'}>
            {btns.map((item , index)=>(
            <Button key={index} bgColor={'black'} color={'white'}onClick={()=>ChangePage(index +1)}>{index +  1}</Button>

            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};


export default Coins;
