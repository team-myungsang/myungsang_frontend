import styled from 'styled-components';

export const SHeader = styled.div`
  display: flex;
  align-items: center;
  background: #f0f0f0;
  height: 55px;
  > .left {
    position: absolute;
    left: 0;
    padding: 18px;
    border: none;
    cursor: pointer;
  }
  > .right {
    margin: 18px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const SVideo = styled.video`
  height: 180px;
  background: gray;
`;
export const SVideoSample = styled.div`
  height: 180px;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SMain = styled.div`
  padding-bottom: 20px;
`;

export const STitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 20px;
`;

export const SWatchNDate = styled.div`
  display: flex;
  align-items: center;
  color: #9e9e9e;
  padding-bottom: 33px;
  > .watch {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 16px;
    .count {
      padding-left: 5px;
    }
  }
  > .date {
    ::before {
      content: '·';
      padding: 0 10px;
    }
  }
`;

export const SFeedback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > hr {
    transform: rotate(90deg);
    width: 30px;
    border-color: #e7e7e7;
    margin: 20px;
  }
  > .like,
  .share,
  .save {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > svg {
      width: 18px;
      height: 15px;
    }
    > div {
      padding-top: 6px;
    }
  }
`;

export const SUser = styled.div`
  display: flex;
  align-items: center;
  border-width: 1px 0;
  border-color: #e7e7e7;
  border-style: solid;
  padding: 12px 16px;
  > .profile {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background: red;
    margin-right: 10px;
  }
`;

export const SDescription = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  > .left {
    position: absolute;
    left: 20px;
  }
  > .right {
    position: absolute;
    right: 20px;
  }
`;

export const SMemo = styled.div`
  padding: 10px 20px;
  word-break: break-all;
`;
