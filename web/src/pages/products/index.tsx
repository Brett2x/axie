import Head from "next/head";
import Image from "next/image";
import { Anchor } from "@/components/ui/anchor";
import { Footer } from "@/components/ui/footer";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Topbar } from "@/components/ui/topbar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { Input } from "../components/input"
import { Label } from "@/components/label"
 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DialogDemo() {
    return (
        <Dialog>
           <Button>yes</Button> 
        </Dialog>

    )
  }

  export default DialogDemo