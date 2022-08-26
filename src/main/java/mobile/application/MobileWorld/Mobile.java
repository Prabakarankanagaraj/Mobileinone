package mobile.application.MobileWorld;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Mobile {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="mobile_id")
	private int mobId;
	@Column(name="mobile_brand")
	private String brand;
	@Column(name="mobile_model")
	private String model;
	@Column(name="mobile_cost")
	private int cost;
	@Column(name="mobile_megaArms")
	private int megaArms;

}
