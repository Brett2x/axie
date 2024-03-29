import Head from "next/head";

import { Anchor } from "../../components/anchor";
import { Footer } from "../../components/footer";
import { Heading } from "../../components/heading";
import { Example } from "../../components/example";
import { Text } from "../../components/text";
import { Topbar } from "../../components/topbar";

 

import WebGLComponent from '../app';


const items = [
  {
    id: "nova",
    name: "Nova Client (19.99€)",
    author: "Nova Developer",
  },
  {
    id: "adapt",
    name: "Adapt Client (21.99€)",
    author: "Adapt Developer",
  },
];


const title = "Products";
const description = "The cheapest and greatest clients on the market";

const Examples = () => {
  return (
    <>
      <div className="parent-container">
    <WebGLComponent />
  </div>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
      </Head>
      <div className="h-screen-ios relative z-20 mx-auto flex max-w-7xl flex-col px-4">
        <Topbar />
        <div className="relative mx-auto flex max-w-3xl flex-col justify-center py-10">
          <div className="mb-12 max-w-[745px] text-center">
            <Heading className="mb-2 text-white" size="8">
              Products
            </Heading>
            <Text as="p" className="text-slate-11" size="4">
              {description}.
            </Text>
            <Text as="p" className="text-slate-11" size="4">
              
            <Anchor
                appearance="white"
                href="https://discord.gg/Uaru7PMABH"
                target="_blank"
              >
                Click
              </Anchor>{" "}
               the client to purchase, by purchasing you agree to our  
              <Anchor
                appearance="white"
                href="https://discord.com/channels/1190154510249758910/1190393014368088074/1190439296700788786"
                target="_blank"
              >
                ‎  Terms of Service.
              </Anchor>{" "}
            </Text>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {items.map((item) => (
              <Example key={item.id} {...item} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Examples;
