import { DropsContractProvider } from "@public-assembly/zora-drops-utils"
import { DropsComponents } from "@public-assembly/erc721-drops-minter"

const EDITIONS = [
  '0x1abb112117822d395c2b147679a9a93273a39255',
  '0x2c3f108328581c0b490b222b75d474de38b355f9',
  '0x454bc9e2f870939913626fb8fbea439782e16238',
]

export function EditionsDisplay() {
  return (
    <section id="editions" className='flex flex-col border-t-[1px] border-black gap-12 py-6'>
      {EDITIONS.map((address) =>
        <DropsContractProvider collectionAddress={address} key={address}>
          <div className="grid grid-cols-2 gap-6">
            <div className="w-full relative aspect-video">
              <DropsComponents.Thumbnail style={{width: '100%', height: '100%'}} />
            </div>
            <div className="flex flex-col gap-1">
              <DropsComponents.MetadataName label={false} />
              <DropsComponents.MetadataDescription label={false} />
            </div>
          </div>
        </DropsContractProvider>
      )}
    </section>
  )
}