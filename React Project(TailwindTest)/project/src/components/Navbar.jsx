import React from 'react'

const Navbar = () => {
  return (
    <div className="Navbar5 w-96 h-16 bg-white border-b border-black flex-col justify-start items-center inline-flex">
  <div className="Content self-stretch h-16 px-16 border-b border-black justify-between items-center inline-flex">
    <div className="Column justify-start items-center gap-6 flex">
      <div className="Logo w-16 h-7 relative" />
      <div className="Column justify-start items-start gap-8 flex">
        <div className="Link text-black text-base font-normal font-['Roboto'] leading-normal">Link One</div>
        <div className="Link text-black text-base font-normal font-['Roboto'] leading-normal">Link Two</div>
        <div className="Link text-black text-base font-normal font-['Roboto'] leading-normal">Link Three</div>
        <div className="NavLinkDropdown justify-center items-center gap-1 flex">
          <div className="Link text-black text-base font-normal font-['Roboto'] leading-normal">Link Four</div>
          <div className="ChevronDown w-6 h-6 relative" />
        </div>
      </div>
    </div>
    <div className="Column justify-center items-center gap-4 flex">
      <div className="Button px-5 py-2 border border-black justify-center items-center gap-2 flex">
        <div className="Button text-black text-base font-normal font-['Roboto'] leading-normal">Button</div>
      </div>
      <div className="Button px-5 py-2 bg-black border border-black justify-center items-center gap-2 flex">
        <div className="Button text-white text-base font-normal font-['Roboto'] leading-normal">Button</div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Navbar