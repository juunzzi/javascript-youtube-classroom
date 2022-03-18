import { API_PATHS } from '../../src/js/constants/fetcher';

/* eslint-disable */
describe('사용자는 검색을 통해 영상을 확인할 수 있다.', () => {
  const baseURL = './index.html';
  const API_URL = 'https://jolly-agnesi-fe3944.netlify.app';
  beforeEach(() => {
    cy.visit(baseURL);

    cy.showModal();
  });
  it('모달 버튼을 클릭하면, 검색 모달 창이 보인다.', () => {
    cy.get('.modal-container').should('exist');
  });
  it('모달 버튼을 클릭 후, 검색어를 입력하면 결과를 확인할 수 있다.', () => {
    const validKeyword = '이하이';
    cy.intercept(`${API_URL}/${API_PATHS.SEARCH}*`, { fixture: 'searchResult' }).as(
      'getSearchVideos'
    );

    cy.get('#search-modal-button').click();

    cy.get('#search-input-keyword').type(validKeyword);

    cy.get('#search-button').click();

    cy.get('.video-item').should('exist');
  });
  // it('빈 검색어를 입력하면 경고창을 확인하게 된다.', () => {
  //   const inValidKeyword = ' ';

  //   const stub = cy.stub();
  //   cy.on('window:alert', stub);

  //   cy.showModal();

  //   cy.get('#search-input-keyword').type(inValidKeyword);

  //   cy.get('#search-button')
  //     .click()
  //     .then(() => {
  //       expect(stub).to.be.called;
  //     });
  // });
});
