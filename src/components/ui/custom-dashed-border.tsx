import React, {ReactNode} from 'react';

interface CustomDashedBorderProps {
    top?: true | TopStyle;
    right?: true | RightStyle;
    bottom?: true | BottomStyle;
    left?: true | LeftStyle;
    children?: ReactNode;
}

interface TopStyle {
    color?: string;
    stripe?: number;
    spacing?: number;
    height?: number | string;
}

interface RightStyle {
    color?: string;
    stripe?: number;
    spacing?: number;
    height?: undefined;
    width?: number | string;
}

interface BottomStyle {
    color?: string;
    stripe?: number;
    spacing?: number;
    height?: number | string;
}

interface LeftStyle {
    color?: string;
    stripe?: number;
    spacing?: number;
    width?: number | string;
}

const buildStyle = (
    position: 'top' | 'right' | 'bottom' | 'left',
    style: true | TopStyle | RightStyle | BottomStyle | LeftStyle | undefined
): React.CSSProperties => {
    if (style === undefined) {
        return {};
    }

    const defaultStyle = {
        color: '#000',
        stripe: 10,
        spacing: 10,
        height: ['top', 'bottom'].includes(position) ? '1px' : '100%',
        width: ['right', 'left'].includes(position) ? '1px' : '100%',
    };

    const customStyle = {
        ...defaultStyle,
        ...(style === true ? {} : Object.fromEntries(Object.entries(style).map(([key, value]) => {
            if (['height', 'width'].includes(key)) {
                return [key, `${value}px`];
            }
            return [key, value];
        }))),
    };

    const direction = ['top', 'bottom'].includes(position) ? 'to right' : 'to bottom';
    const {color, stripe, spacing, height, width} = customStyle;
    const size = stripe + spacing;
    const ratio = 100 * stripe / size;

    return {
        position: 'absolute',
        [position]: 0,
        backgroundImage: `linear-gradient(${direction}, ${color}, ${color} ${ratio}%, transparent ${ratio}%, transparent 100%)`,
        backgroundSize: `${size}px ${size}px`,
        height,
        width,
    };
};

export const CustomDashedBorder: React.FunctionComponent<CustomDashedBorderProps> = ({
     top,
     right,
     bottom,
     left,
     children,
}) => {
    return (
        <>
            {top && <div style={buildStyle('top', top)}></div>}
            {right && <div style={buildStyle('right', right)}></div>}
            {bottom && <div style={buildStyle('bottom', bottom)}></div>}
            {left && <div style={buildStyle('left', left)}></div>}
            {children}
        </>
    );
};

interface CustomDashedBorderBase extends CustomDashedBorderProps {
    className?: string;
    withoutBorders?: boolean;
}

export default function CustomDashedBorderBase({
    className,
    top,
    right,
    bottom,
    left,
    withoutBorders = false,
    children
} : CustomDashedBorderBase) {

    return (
        <div className="relative h-fit">
            <CustomDashedBorder
                top={withoutBorders ? undefined : top || {color: "#512E1240", height: 1, stripe: 10, spacing: 10}}
                right={withoutBorders ? undefined : right || {color: "#512E1240", width: 1, stripe: 10, spacing: 10}}
                bottom={withoutBorders ? undefined : bottom || {color: "#512E1240", height: 1, stripe: 10, spacing: 10}}
                left={withoutBorders ? undefined : left || {color: "#512E1240", width: 1, stripe: 10, spacing: 10}}
            >
                <div className={className}>
                    {children}
                </div>
            </CustomDashedBorder>
        </div>
    )
}