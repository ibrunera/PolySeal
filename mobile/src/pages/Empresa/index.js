import React from "react";
import { View, Image, Text } from "react-native";

import empresa01Img from "../../assets/empresa01.png";
import empresa02Img from "../../assets/empresa02.png";
import empresa03Img from "../../assets/empresa03.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from "./style";
import { ScrollView } from "react-native-gesture-handler";

export default function Empresa() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.body}>
          <Image source={empresa01Img} style={styles.empImgs} />
          <Text style={styles.title}>A empresa</Text>
          <Text style={styles.paragraph}>
            A Polyseal, empresa do segmento de vedações para equipamentos
            hidráulicos e pneumáticos, atua no mercado desde 1996, desenvolvendo
            e produzindo um amplo pacote de serviços e produtos dentro e fora do
            padrão de sua linha de fabricação. Com uma equipe qualificada para
            desenvolver e produzir produtos de primeira linha, com alta
            qualidade, os seus produtos antecipam, compreendem e atendem às
            necessidades do cliente, de acordo com as inovações tecnológicas e
            as exigências do mercado, com um alto grau de confiabilidade.
          </Text>

          <Image source={empresa02Img} style={styles.empImgs} />
          <Text style={styles.title}>A qualidade que faz a diferença</Text>
          <Text style={styles.paragraph}>
            A qualidade está à base de tudo o que fazemos. As interrupções de
            produção devido a problemas de vedação podem causar grandes perdas.
            Assim, nos esforçamos ao máximo para fornecer produtos de vedação de
            alta qualidade, que atendam às necessidades de nossos clientes. Na
            Polyseal, constantemente reforçamos e melhoramos soluções para
            vedação.
          </Text>

          <Text style={styles.title}>Conceito de fabricação</Text>
          <Text style={styles.paragraph}>
            Sabemos que somente a tecnologia avançada pode colocar-nos à frente
            de nossos concorrentes. Um ambiente em rápida mutação exige novos
            conceitos de produção que ultrapassem as exigências dos nossos
            clientes, tais como: Prazos curtos para entrega de pedidos Nenhuma
            restrição quanto a moldes ou ferramentas Nenhuma exigência de
            estoque para nossos clientes Engenharia de vedações que atendem às
            especificações do cliente
          </Text>

          <Image source={empresa03Img} style={styles.empImgs} />
          <Text style={styles.title}>Precisão</Text>
          <Text style={styles.paragraph}>
            Máquinas CNC, comandadas por um software especialmente desenvolvido,
            garantem a precisão da usinagem das vedações nas medidas e na
            geometria dos perfis solicitados.
          </Text>

          <Text style={styles.title}>Flexibilidade</Text>
          <Text style={styles.paragraph}>
            Atendimento a quaisquer necessidades técnicas, com mais de 170
            perfis programados, com diâmetro de 5 a *1500mm, tanto em unidade
            métrica como em polegada. *sob consulta
          </Text>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}
