package mobile.application.MobileWorld;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertLinesMatch;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

 
@SpringBootTest
@RunWith(SpringRunner.class)
class MobileWorldApplicationTests {
	
	@MockBean 
	Broker repo;
	@Autowired
	MobileService Service;
	
	@Test
	public void testingAllTypes() {
		String m1="lenovo";
		String m2="honor";
		String m3="realme";
		String m4="asus";
		
		List<String> check1=Stream.of(m1,m2,m3).collect(Collectors.toList());
		List<String> check2=Stream.of(m2,m1,m3).collect(Collectors.toList());
		List<String> check3=Stream.of(m1,m3,m2).collect(Collectors.toList());
		List<String> check4=Stream.of(m3,m1,m2).collect(Collectors.toList());
		
		when(repo.findAllByMegaArms(5000)).thenReturn(Stream.of(m3,m1,m2).collect(Collectors.toList()));
//		assertLinesMatch(check1, Service.makeFetchByMegaArms(5000));
//		assertLinesMatch(check2, Service.makeFetchByMegaArms(5000));
//		assertLinesMatch(check3, Service.makeFetchByMegaArms(5000));
		assertLinesMatch(check4, Service.makeFetchByMegaArms(5000));
		
		}
	
	@Test
	public void testingAllBrandCost() {
		
		Mobile m1=new Mobile(100,"lenovo","x1",7500,2500);
		Mobile m2=new Mobile(101,"honor","x11",6800,8800);
		Mobile m3=new Mobile(102,"realme","y21",7500,7500);
		Mobile m4=new Mobile(102,"realme","z11",6500,7500);
		
		when(repo.findAllByBrandAndCost("realme", 6500)).thenReturn(Stream.of(m3,m4).collect(Collectors.toList()));
		assertSame(m4, Service.makeFetch("realme", 6500).get(1))	;
	}
	
	@Test
	public void testingAllByCost() {
		Mobile m1=new Mobile(100,"lenovo","x1",5500,2500);
		Mobile m2=new Mobile(101,"honor","x11",6500,8800);
		Mobile m3=new Mobile(102,"realme","y21",5500,7500);
		
		when(repo.findAllByCost(5500)).thenReturn(Stream.of(m1,m3).collect(Collectors.toList()));
		assertEquals(m1, Service.makeReadCost(5500).get(0));
	}
	
	@Test
	public void testingDelete() {
		Mobile m1=new Mobile(100,"lenovo","x1",5500,2500);
		 repo.delete(m1);
		 verify(repo, times(1)).delete(m1);
	}
	
	@Test
	public void testineRead() {
	Optional<Mobile> m1=Optional.of(new Mobile(100,"lenovo","x1",5500,2500));
	Optional<Mobile> m2=Optional.of(new Mobile(101,"honor","x11",6500,8800));
	
	when(repo.findById(100)).thenReturn(m1);
	when(repo.findById(101)).thenReturn(m2);
	
	assertEquals(m2, Service.makeRead(101));
	assertTrue(Service.makeRead(100).get().getBrand().equals(m1.get().getBrand()));
	}
	
	@Test
	public void testingCreate() {
		Mobile m1=new Mobile(100,"lenovo","x1",5500,2500);
		Mobile m2=new Mobile(101,"honor","x11",6500,8800);
		
		when(repo.save(m1)).thenReturn(m1);
		when(repo.save(m2)).thenReturn(m2);
		 assertTrue(Service.NewOne(m1).getBrand().equals("lenovo"));
		 assertNotNull(Service.NewOne(m2).getModel());
		
	}
	
	@Test
	public void testing() {
		Mobile m1=new Mobile(100,"lenovo","x1",5500,2500);
		Mobile m2=new Mobile(101,"honor","x11",6500,8800);
		Mobile m3=new Mobile(102,"realme","y21",3500,7500);
		
		when(repo.findAll()).thenReturn(Stream.of(m1,m2,m3).collect(Collectors.toList()));
		
		assertSame(3,Service.makeFetchAll().size());
		assertNotNull(Service.makeFetchAll().get(0));
	}
	

	@Test
	void contextLoads() {
	}

}
