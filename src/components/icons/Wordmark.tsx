import { useStyletron } from 'baseui';
import wordmark from './wordmark.svg';
import { SVGProps } from 'react';
import { StyledSvg } from 'baseui/icon';
import footerdecorator from './footerdecorator.svg';

export const Wordmark = (props: {
    width?: string;
    height?: string;
}) => {
    const [css, $theme] = useStyletron();

    return (

        <img
            src={wordmark}
            className={css({
                ...props,
            })}
        />

    );
};

export const FooterDecorator = () => {
    const [css, $theme] = useStyletron();

    return (
        <img className={
            css({
                paddingBottom: "164px",
                paddingLeft: "150px",
                paddingRight: "150px",
                height: "400px",
            })
        } src={footerdecorator} />
    );
}