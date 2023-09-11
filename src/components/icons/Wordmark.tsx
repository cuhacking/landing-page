import { useStyletron } from 'baseui';
import wordmark from './wordmark.svg';
import footerdecorator from './footerdecorator.svg';

export const Wordmark = (props: {
    width?: string;
    height?: string;
}) => {
    const [css, _$theme] = useStyletron();

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
    const [css, _$theme] = useStyletron();

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