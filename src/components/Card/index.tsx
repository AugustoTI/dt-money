import * as S from './styles';

export interface CardStyleProps {
  highlightBackground?: boolean;
}

interface CardProps extends CardStyleProps {
  title: string;
  price: string;
  icon: string;
}

export const Card = ({
  icon,
  price,
  title,
  highlightBackground = false,
}: CardProps) => {
  return (
    <S.Container highlightBackground={highlightBackground}>
      <header>
        <p>{title}</p>
        <img src={icon} alt={title} />
      </header>
      <strong>{price}</strong>
    </S.Container>
  );
};
