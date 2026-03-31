import { useEffect, useState } from "react";
import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";
import './Map.css';
import './font.css';

const {kakao} = window;

function Map({ address }) {
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 37.376944, lng: 126.797413 },
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
    isLoading: false
  });
  
  // 주소 변수
  const [searchAddress, setSearchAddress] = useState(address || "경기 시흥시 장현순환로 51");
  
  // 주소에 해당하는 마커 표시
  useEffect(() => {
    // kakao 객체가 로드되었는지 확인
    if (!window.kakao || !window.kakao.maps || !window.kakao.maps.services) {
      return;
    }

    // 주소를 좌표로 변환하는 함수
    const geocoder = new kakao.maps.services.Geocoder();
    
    // 주소를 좌표로 변환하여 state에 저장
    const callback = function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = result[0];
        setState(prev => ({
          ...prev,
          center: { lat: newSearch.y, lng: newSearch.x },
          isLoading: false
        }));
      }
    };
    
    setState(prev => ({ ...prev, isLoading: true }));
    geocoder.addressSearch(searchAddress, callback);
  }, [searchAddress]);
  
  return (
    <div className="map-container">
      {/* 오시는 길 제목 */}
      <div className="map-header noto-sans-kr-bold">
          오시는 길
      </div>
      
      {/* 주소 정보 */}
      <div className="map-address noto-sans-kr-medium">
        <div className="map-address-item ">
          <strong>도로명주소:</strong> 경기 시흥시 장현순환로 51
        </div>
        <div>
          <strong>지번주소:</strong> 경기 시흥시 장현동 357-6 에셀센터
        </div>
        <div>
          장현호반써밋아파트 앞
        </div>
      </div>

      {/* 지도 */}
      <KakaoMap
        center={state.center}
        isPanto={state.isPanto}
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "8px"
        }}
        level={3}
      >
        {!state.isLoading && state.center && (
          <MapMarker position={state.center}>
            <div style={{ 
              padding: '6px 10px', 
              backgroundColor: '#fc5230', 
              color: 'white', 
              borderRadius: '4px', 
              fontSize: '10px',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              border: '1px solid rgba(255,255,255,0.3)',
              backdropFilter: 'blur(2px)'
            }}>
              에셀센터
            </div>
          </MapMarker>
        )}
      </KakaoMap>
    </div>
  )
}

export default Map;