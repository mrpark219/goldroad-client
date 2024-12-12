import DefaultButton from '@/app/components/buttons/default-button';
import Image from 'next/image';

function Gether() {
  return (
    <div className="mb-[320px]">
      <p className="mt-[33px] mb-[15px] font-bold text-[24px]">모임</p>
      <div className="flex flex-col gap-[12px]">
        <div className="border-[1px] border-solid border-[#C4C4C6] rounded-[8px] p-[20px] flex-col flex gap-[40px] cursor-pointer">
          <div className="flex gap-[12px]">
            <Image
              src=""
              alt="이미지"
              width={128}
              height={128}
              className="bg-[#EDEDED] rounded-[12px]"
            />
            <div className="flex flex-col">
              <p className="w-fit bg-[#D7F0EA] mb-[4px] text-[#0A614D] text-[12px] font-semibold px-[10px] py-[4px] rounded-[16px]">
                인기
              </p>
              <p className="font-semibold text-[20px] mb-[8px] text-black">모임이름이에요</p>
              <div className="flex flex-wrap gap-[8px] mb-[12px]">
                <p className="font-semibold text-[#666666] text-[18px]"># 제주도</p>
                <p className="font-semibold text-[#666666] text-[18px]"># 서귀포</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="avatar-group -space-x-2 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-6">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-6">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-6">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-6">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="bg-[#D9D9D9] text-extrabold text-[#fff] w-6">
                      <span>+</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#666666] text-[14px]">
                  <b className="font-semibold text-[18px]">8</b> /12
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-[12px]">
            <DefaultButton text="취소" type="gray" onClick={() => console.log('a')} />
            <DefaultButton text="선택" onClick={() => console.log('a')} />
          </div>
        </div>
        <div className="border-[1px] border-solid border-[#C4C4C6] rounded-[8px] p-[20px] flex-col flex gap-[40px] cursor-pointer">
          <div className="flex gap-[12px]">
            <Image
              src=""
              alt="이미지"
              width={128}
              height={128}
              className="bg-[#EDEDED] rounded-[12px]"
            />
            <div className="flex flex-col">
              <p className="w-fit bg-[#D7F0EA] mb-[4px] text-[#0A614D] text-[12px] font-semibold px-[10px] py-[4px] rounded-[16px]">
                인기
              </p>
              <p className="font-semibold text-[20px] mb-[8px] text-black">모임이름이에요</p>
              <div className="flex flex-wrap gap-[8px] mb-[12px]">
                <p className="font-semibold text-[#666666] text-[18px]"># 제주도</p>
                <p className="font-semibold text-[#666666] text-[18px]"># 서귀포</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="avatar-group -space-x-2 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-6">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-6">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-6">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-6">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="bg-[#D9D9D9] text-extrabold text-[#fff] w-6">
                      <span>+</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#666666] text-[14px]">
                  <b className="font-semibold text-[18px]">8</b> /12
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-[12px]">
            <DefaultButton text="취소" type="gray" onClick={() => console.log('a')} />
            <DefaultButton text="선택" onClick={() => console.log('a')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gether;
