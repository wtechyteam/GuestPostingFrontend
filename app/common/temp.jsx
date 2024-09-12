<div className="mt-4 flex flex-col gap-0.5">
<div className="flex flex-col items-start">
  <Text
    size="textlg"
    as="p"
    className="text-adsy_com-black text-[11.5px]"
  >
    {languageText}
  </Text>
  <Heading
    as="p"
    className="text-adsy_com-black font-bold text-[11.5px]"
  >
    {product.language || language}
  </Heading>
</div>
<div className="flex flex-col items-start mt-4">
  <Text
    size="textlg"
    as="p"
    className="text-adsy_com-black text-[11.5px]"
  >
    {countryText}
  </Text>
  <Heading
    as="p"
    className="text-adsy_com-black font-bold text-[11.5px]"
  >
    {product.country || countryValue}
  </Heading>
</div>
<div className="flex flex-col items-start mt-4">
  <Text
    size="textlg"
    as="p"
    className="text-adsy_com-black text-[11.5px]"
  >
    {linksText}
  </Text>
  <Heading
    as="p"
    className="text-adsy_com-black font-bold text-[11.5px]"
  >
    {product.links || linksValue}
  </Heading>
</div>
<div className="flex flex-col items-start mt-4">
  <Text
    size="textlg"
    as="p"
    className="text-adsy_com-black text-[11.5px]"
  >
    {markedSponsoredByText}
  </Text>
  <Heading
    as="p"
    className="text-adsy_com-black font-bold text-[11.5px]"
  >
    {product.markedSponsoredBy || markedSponsoredByValue}
  </Heading>
</div>
</div>