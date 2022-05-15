import logoSrc from '@assets/logo_white.png';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link, useSearchParams } from 'react-router-dom';
import { PATH } from '@constants/path';
import { Category } from '@models/category';
import { getCategories } from '@apis/video';
import { SHeader } from './Header.style';

function Header() {
  const [categoryList, setCategoryList] = useState<Category[]>();
  const [topVisible, setTopVisible] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 658) {
        setTopVisible(false);
      } else {
        setTopVisible(true);
      }
    });

    getCategories()
      .then(v => setCategoryList(v))
      .catch(e => console.log(e));
  }, []);

  function onClickCategory(category?: string) {
    if (!category) {
      setSearchParams('');
      return;
    }
    setSearchParams({
      c: category,
    });
  }

  console.log(categoryList);

  return (
    <SHeader className={classNames({ hide: !topVisible })}>
      <div className="top">
        <Link to={PATH.MAIN}>
          <img src={logoSrc} alt="logo" className="logo" />
        </Link>
      </div>
      {categoryList && (
        <div className="category">
          <div
            className={classNames('categoryItem', {
              selected: !searchParams.get('c'),
            })}
            onClick={() => onClickCategory()}
            role="button"
            tabIndex={0}
          >
            전체
          </div>
          {categoryList.map(c => (
            <div
              key={`category_${c.id}`}
              className={classNames('categoryItem', {
                selected: searchParams.get('c') === c.id.toString(),
              })}
              onClick={() => onClickCategory(c.id.toString())}
              role="button"
              tabIndex={0}
            >
              {c.title}
            </div>
          ))}
        </div>
      )}
    </SHeader>
  );
}

export default Header;
