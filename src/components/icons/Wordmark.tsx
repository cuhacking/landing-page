import { useStyletron } from 'baseui';
import wordmark from './wordmark.svg';
import { SVGProps } from 'react';
import { StyledSvg } from 'baseui/icon';

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
