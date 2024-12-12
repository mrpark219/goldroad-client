'use client';
import DefaultButton from '@/app/components/buttons/default-button';
import ButtonLayout from '@/app/member/signup/components/layout/button-layout';
import Icon from '../../../../public/icons/icon';
interface GatherModalProps {
  handleModalClose: () => void;
}
const GatherModal = ({ handleModalClose }: GatherModalProps) => {
  return (
    <>
      <div className="mx-[24px]">
        <p className="mt-[20px] text-[24px] font-bold text-black mb-[8px] flex justify-between">
          <span className="text-[#0A614D]">어떤모임제목이에요</span>
          <button onClick={handleModalClose}>
            <Icon name="x" width={22} height={22} />
          </button>
        </p>
        <div className="flex flex-wrap gap-[12px] mb-[18px]">
          <p className="font-semibold text-[#666666] text-[18px]">#제주도</p>
          <p className="font-semibold text-[#666666] text-[18px]">#서귀포</p>
        </div>
        <div className="flex items-center gap-[8px]">
          <Icon name={'calendar'} width={20} height={20} />
          <p className="text-[#666666] font-medium text-[18px]">2024.12.13 11시 00분</p>
        </div>
        <p className="text-[#666666] font-medium text-[18px] mb-[24px]">
          모임에대한설명이에여모임에대한설명이에여모임에대한설명이에여모임에대한설명이에여
        </p>
        <div className="flex justify-between w-full items-center">
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
      <div className="w-full flex items-center justify-center">
        <Icon name={'AI'} width={400} height={500} />
      </div>

      <ButtonLayout>
        <DefaultButton text="확인" onClick={() => console.log('a')} />
      </ButtonLayout>
    </>
  );
};

export default GatherModal;
