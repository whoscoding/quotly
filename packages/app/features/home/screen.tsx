import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Welcome to Quotly.</H1>
      <View className="max-w-xl">
        <P className="text-center">
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>
        <P className="text-center">
          Quotly is made by{' '}
          <A
            href="https://twitter.com/polymathicb"
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            Alhouseny Camara
          </A>
          .
        </P>
      </View>
    </View>
  )
}
