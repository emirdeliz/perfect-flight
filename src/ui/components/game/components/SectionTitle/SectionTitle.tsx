import { Flex, Title } from "@atoms";
import { memo } from "react";

interface SectionTitleProps { 
  title: string;
  subTitle: string|number;
  justifySpaceBetween?: boolean; 
}

export const SectionTitle = memo(({ title, subTitle, justifySpaceBetween }: SectionTitleProps) => {
  return justifySpaceBetween ? (
    <Flex.Row justifySpaceBetween pl2 pr2>
       <Title n5 semibold>{title}</Title>
       <Title n5>{subTitle}</Title>
     </Flex.Row>
  ) : (
    <Flex.Center pb2 pl5 pr5>
      <Title n5 mb3 noWrap>{title}</Title>
      <Title n5 semibold fs6 mb2>{subTitle}</Title>
    </Flex.Center>
  );
});
