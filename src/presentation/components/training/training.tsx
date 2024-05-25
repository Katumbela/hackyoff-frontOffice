import { motion } from "framer-motion";
import { TrainingsData } from "../../../domain/config/trainings-config";
import { CardComponent } from "../card/card";
import { GlitchAnimation } from "react-glitch-animation";

export function TrainingSection() {
  return (
    <>
      <section
        id="trainings"
        className="container z-10 2xl:pt-[10rem] pt-[5rem]"
      >
        <center>
          <h1 className="text-white hacker 2xl:text-6xl font-bold">
            <GlitchAnimation
              isActive={true}
              animationDurationMS={10000000}
              text=" Treinamentos em Destaque "
            />{" "}
          </h1>
        </center>
        <div className="grid static z-20 mt-[5rem] grid-cols-3 gap-8">
          {TrainingsData.map((train, index) => (
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={train.id}
            >
              <CardComponent datas={train} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
