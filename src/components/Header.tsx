/**
 * Assets
 */

import { motion } from "framer-motion";

/**
 * Node Modules
 */
import { SparkleIcon } from "lucide-react";

/**
 * Components
 */
import {Button} from "@/components/ui/Button";
export const Header = () => {
    return (
        <header className="">
            <motion.div className="space-y-2" 
            initial={{ x: -20 , opacity: 0 }}
            animate = {{x:0 , opacity: 1}}>
                <div className="flex items-center gap-2 text-primary font-semibold tracking-tight" >
                    <SparkleIcon size={20}/>
                    <p>Full Stack Orchestrator</p>
                </div>

                <h1 className="text-5xl font-bold tracking-tight text-on-background md:text-7xl"> 
                    Karthik <span className="text-primary">Medapalli</span>
                </h1>

                <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                    Crafting fluid digital experiences where code meets human-centric design. Focused on scalable React ecosystems and robust cloud architectures.
                </p>
            </motion.div>

            <motion.div className="flex gap-4" initial={{x:20 , opacity : 0}} animate={{x:0 , opacity: 1}}>
                <Button/>
            </motion.div>
        </header>
    );
};
