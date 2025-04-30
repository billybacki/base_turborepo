import { ReactNode, ComponentType } from 'react'

export type ProviderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Provider: ComponentType<any>
  props?: Record<string, unknown>
}

export type ProviderComposerProps = {
  providers: ProviderProps[]
  children: ReactNode
}

export const ProviderComposer = ({ providers, children }: ProviderComposerProps) => {
  return providers.reduceRight((acc, { Provider, props = {} }) => <Provider {...props}>{acc}</Provider>, children)
}
