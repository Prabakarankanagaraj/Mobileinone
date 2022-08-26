package mobile.application.MobileWorld;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

 
@Service
public class MobileService {
	@Autowired
	Broker obj;
	 
	public List<String> makeDeleteCustom(String tp){
		List<String> tmp=obj.findAllByTypesLikes(tp);
		obj.deleteAllByCustomize(tp);
		return tmp;
	}
	
	public String makeDeleteKey(int key) {
		Mobile t=obj.findById(key).orElse(null);
		String msg=t.getModel()+" has deleted ";
		obj.deleteById(key);
		return msg;
	}
	
	public String makeDelete(Mobile tel) {
		String msg=tel.getBrand()+"has deleted";
		obj.delete(tel);
		return msg;
	
	}
	public void Makeupdate(String beta){
		obj.updatePriceByBrand(beta);
	}
	
	public List<String> makeFetchByMegaArms(int string){
		return obj.findAllByMegaArms(string);
	}
	
	public List<Mobile> makeFetch(String a,int b){
		return obj.findAllByBrandAndCost(a, b);
	}
	
	public List<Mobile> makeReadCost(int rest){
		return obj.findAllByCost(rest);
		
	}
	
	public List<Mobile> makeReadBrand(String get){
		return obj.findAllByBrand(get);
	}
	
	public Optional<Mobile> makeRead(int key){
		return obj.findById(key);
		
	}
	public List<Mobile> makeFetchAll(){
		return (List<Mobile>) obj.findAll();		
	}
	
	public Mobile NewOne(Mobile Mob) {
		return obj.save(Mob);
	}


}
