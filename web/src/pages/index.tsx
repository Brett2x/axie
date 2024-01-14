import Head from "next/head";
import Link from "next/link";
import { Button } from "../components/button";
import { Code } from "../components/code";
import { Footer } from "../components/footer";
import { Heading } from "../components/heading";
import { IconArrowRight } from "../components/icons";
import { Text } from "../components/text";
import { Topbar } from "../components/topbar";
import WebGLComponent from './app';



const Web = () => {
  const title = "Axie Services";
  const description =
    "A marketplace full of ethical clients with one of the cheapest and greatest buying experiences out there.";

    

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
      <div className="h-screen-ios relative z-20 mx-auto flex h-screen max-w-7xl flex-col justify-between px-4">
        <Topbar />
        <div className="relative mx-auto flex max-w-3xl flex-col justify-center">
          <div className="max-w-[725px] text-center">
            <Heading
              className="before:bg-shine relative mb-8 !text-white/80 before:absolute before:left-0 before:top-0 before:w-full before:animate-shine before:bg-[length:200%] before:bg-clip-text before:text-transparent before:content-['The_next_generation_of_buying_clients'] "
              
              size="10"  
            > 
             The next generation of buying clients 
            </Heading>
            <div className="sm:px-20">
              <Text size="5">
                A marketplace full of ethical clients with one of the cheapest and greatest buying experiences out there.
              </Text>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
      <Button asChild size="4">
      <Link href="/examples">
                Explore clients
                <IconArrowRight />
                </Link>
            </Button>
            <Code className="hidden max-w-max md:!inline-flex" language="bash">
            https://discord.gg/Uaru7PMABH
            </Code>
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
  
};



export default Web;
