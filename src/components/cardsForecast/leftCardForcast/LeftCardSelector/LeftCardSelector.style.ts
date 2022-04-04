import styled from 'styled-components'

export const LeftCardSelectorStyle = styled.div`
  margin-top: 32px;
  text-align: left;
  margin-left: 50px;
  margin-bottom: 60px;
  position: relative;
  width: 100%;

  .open{
    .selectMenu{
      display: block;
    }
  }
  .selectInput {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #8083A4;
    border-radius: 8px;
    width: 236px;
    height: 48px;
    display: flex;
    align-items: center;
    background-color: #8083A40F;
    border: 2px solid #8083A433;
    padding-left: 16px;
    justify-content: space-between;
  }
  img {
    cursor: pointer;
    position: relative;
    top:3px;
    right: 18px;
  }


  .selectMenu {
    opacity: 1;
    transition: .3s;
    overflow-y: auto;
    display: block;
    background: #fff;
    position: absolute;
    width: 252px;
    height: auto;
    max-height: 160px;
    border: 2px solid #8083A433;
    margin-top: 12px;
    box-shadow: 0px 2px 4px rgba(4, 5, 73, 0.16), 14px 14px 20px rgba(5, 6, 114, 0.08);
  }

  .selectMenu2 {
    opacity: 0;
    transition: .3s;
    overflow-y: auto;
    display: block;
    background: #fff;
    position: absolute;
    width: 252px;
    height: auto;
    max-height: 160px;
    border: 2px solid #8083A433;
    margin-top: 12px;
    box-shadow: 0px 2px 4px rgba(4, 5, 73, 0.16), 14px 14px 20px rgba(5, 6, 114, 0.08);
  }

  
  .selectList{
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .selectItem{
    font-family: Ubuntu;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #2C2D76;
    padding-left: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .selectItem:hover{
    background-color:#8083A40F;
    border-radius: 8px;
    cursor: pointer;
    transition: .15s background-color ;
  }
 `
