package mobile.application.MobileWorld;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

 
@Repository
public interface Broker extends JpaRepository<Mobile, Integer> {
	
	public List<Mobile> findAllByBrand(String brand);
	public List<Mobile> findAllByCost(int cost);
	
	@Transactional
	@Modifying
	@Query("delete from Mobile where brand like %:own%")
	public void deleteAllByCustomize(String own);
	
	@Query("select model from Mobile where brand like %:tp%")
	public List<String> findAllByTypesLikes(String tp);
	
	@Transactional
	@Modifying
	@Query("update Mobile set cost=cost*0.500 where brand=:bnnd")
	public void updatePriceByBrand(String bnnd);
	
	@Query("from Mobile where brand=:type and cost>=:rupee")
	public List<Mobile> findAllByBrandAndCost(String type,int rupee);
	
	@Query("select brand from Mobile where megaArms=:tp")
	public List<String> findAllByMegaArms(int tp);


}
