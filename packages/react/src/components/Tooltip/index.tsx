import { ComponentProps, ReactNode } from "react";
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { TooltipContainer } from "./styles";
import { Text } from "../Text";

export interface TooltipProps extends ComponentProps<typeof RadixTooltip.Provider>{
    elementText: string
    buttonTriggerAs: ReactNode
}


export function Tooltip({ elementText, buttonTriggerAs, ...props } : TooltipProps) {
    return (
        <RadixTooltip.Provider {...props}>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>
                    {buttonTriggerAs}
                </RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content sideOffset={5} asChild>
                        <TooltipContainer>
                            <Text size={'sm'}css={{fontWeight: '$medium'}}>{elementText}</Text>
                            <RadixTooltip.Arrow/>
                        </TooltipContainer>
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    )
}

Tooltip.displayName = 'Tooltip'