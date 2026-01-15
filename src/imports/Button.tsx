import svgPaths from "./svg-mtqztrzrqf";

function SquareArrowOutUpRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="square-arrow-out-up-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="square-arrow-out-up-right">
          <path d={svgPaths.p1fd09e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#8fc295] relative rounded-[6px] size-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[28px] py-[13px] relative size-full">
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
            <p className="leading-[24px] whitespace-pre">Get Pre-Approved</p>
          </div>
          <SquareArrowOutUpRight />
        </div>
      </div>
    </div>
  );
}