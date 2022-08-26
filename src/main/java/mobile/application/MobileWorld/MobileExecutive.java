package mobile.application.MobileWorld;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class MobileExecutive {
	@Autowired
	MobileService service;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	ResourceService serv;
	
	@GetMapping("/return")
	public int returnInt() {
 		return 1200;
	}
	
	@PostMapping("/posting")
	  public void readingByBody(@RequestBody Mobile mob) {
		System.out.println("Received as " +mob);
	}
	
	@GetMapping("/pass/{alpha}/{beta}")
		public void readsome(@PathVariable("alpha") String alpha, @PathVariable("beta") int beta) {
		System.out.println("received string" +alpha+"and the integer is "+beta);
	}
	
	@GetMapping("/haithere")
		public void saySome() {
			System.out.println("bBackend called ...");
		}
		

	
	@PostMapping("/signup")
	public Resource signingUp(@RequestBody Resource resource) {
		String newone=encoder.encode(resource.getPassword());
		resource.setPassword(newone);
		return serv.implementSave(resource);
	}
	
	@DeleteMapping("/delall/{tp}")
	public List<String> callingDeleteMany(@PathVariable("tp") String tp){
		return service.makeDeleteCustom(tp);
		
	}
	@DeleteMapping("/delid/{pos}")
	public String callingDeleteId(@PathVariable("pos") int pos) {
		return service.makeDeleteKey(pos);
	}
	
	@PutMapping("/byups/{change}")
	public void callingUpdate(@PathVariable("change") String change) {
		service.Makeupdate(change);
	}
	
	
	@PutMapping("/up")
	public Mobile callingUp(@RequestBody Mobile Up) {
		return service.NewOne(Up);
		
	}
	
	@DeleteMapping("/del")
	public String callingMakeDelete(@RequestBody Mobile te) {
		return service.makeDelete(te);
		
	}
	
	@GetMapping("/bywhat/{south}")
	public List<String> callingFetchByMegaArms(@PathVariable("south")int south){
		return service.makeFetchByMegaArms(south);
		
	}
	
	@GetMapping("/bytwo/{one}/{two}")
	public List<Mobile> callingFetch(@PathVariable("one")String one,@PathVariable("two")int two){
		return service.makeFetch(one, two);
		
	}
	
	@GetMapping("/byprice/{value}")
	public List<Mobile> callingReadCost(@PathVariable("value") int value){
		return service.makeReadCost(value) ;
		
	}
	
	@GetMapping("/bybrand/{data}")
	public List<Mobile> callingReadBrand(@PathVariable("data") String data){
		return service.makeReadBrand(data);
		
	}
	@GetMapping("/{hey}")
	public Optional<Mobile> makeRead(@PathVariable("hey")int hey){
		return service.makeRead(hey);
		
	}
	
	@GetMapping("/")
	public List<Mobile> callingTraverse(){
		return service.makeFetchAll();
		
	}
	@PostMapping("/new")
	public Mobile CallingCreation(@RequestBody Mobile tel) {
		return service.NewOne(tel);
		
	}


}
