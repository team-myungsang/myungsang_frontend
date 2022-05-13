import { useEffect } from 'react';
import { ReactComponent as Share } from '@assets/share.svg';

declare global {
  interface Window {
    Kakao: any;
  }
}

function KakaoShare() {
  // 자바스크립트키로 카카오 init
  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('86ed9169e203f04d214430bd2576e0c3');
      }
    }
  };

  const url = window.location.href;
  // 현재 url가져오기
  useEffect(() => {
    initKakao(); //
  }, []);

  // 버튼을 누르면 실행되는 함수
  const onShareKakao = () => {
    // 이부분이 매우 헷갈림 여러 사이트를 참고했는데 이 sendDefault부분을 잘 봐야한다.
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        // watch에서 제목 가져오기
        title: '딸기 치즈 케익',
        // watch에서 이미지 가져오기,.
        imageUrl:
          'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Share
      role="button"
      tabIndex={0}
      onClick={onShareKakao}
      onKeyDown={onShareKakao}
    />
  );
}

export default KakaoShare;
